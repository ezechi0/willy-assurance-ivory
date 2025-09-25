-- Créer une table pour les demandes de devis
CREATE TABLE public.demandes_devis (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nom TEXT NOT NULL,
  prenom TEXT NOT NULL,
  email TEXT NOT NULL,
  telephone TEXT NOT NULL,
  type_vehicule TEXT NOT NULL CHECK (type_vehicule IN ('auto', 'moto')),
  marque_vehicule TEXT NOT NULL,
  modele_vehicule TEXT NOT NULL,
  annee_vehicule INTEGER NOT NULL,
  puissance_fiscale INTEGER,
  valeur_vehicule DECIMAL(10,2),
  type_assurance TEXT NOT NULL CHECK (type_assurance IN ('responsabilite_civile', 'vol_incendie', 'tous_risques')),
  antecedents_sinistres BOOLEAN DEFAULT false,
  details_sinistres TEXT,
  message_supplementaire TEXT,
  statut TEXT NOT NULL DEFAULT 'en_attente' CHECK (statut IN ('en_attente', 'en_cours', 'traite', 'annule')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Activer RLS sur la table
ALTER TABLE public.demandes_devis ENABLE ROW LEVEL SECURITY;

-- Créer une politique pour permettre l'insertion publique (pour les visiteurs non connectés)
CREATE POLICY "Permettre insertion publique des demandes de devis" 
ON public.demandes_devis 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Créer une politique pour que seuls les administrateurs puissent voir toutes les demandes
-- Pour l'instant, on permet la lecture à tous les utilisateurs authentifiés
-- (à ajuster quand l'authentification admin sera mise en place)
CREATE POLICY "Lecture des demandes de devis pour utilisateurs authentifiés" 
ON public.demandes_devis 
FOR SELECT 
TO authenticated
USING (true);

-- Créer une fonction pour mettre à jour automatiquement updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Créer un trigger pour mettre à jour automatiquement updated_at
CREATE TRIGGER update_demandes_devis_updated_at
  BEFORE UPDATE ON public.demandes_devis
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Créer un index sur created_at pour améliorer les performances des requêtes chronologiques
CREATE INDEX idx_demandes_devis_created_at ON public.demandes_devis(created_at DESC);

-- Créer un index sur statut pour filtrer rapidement par statut
CREATE INDEX idx_demandes_devis_statut ON public.demandes_devis(statut);