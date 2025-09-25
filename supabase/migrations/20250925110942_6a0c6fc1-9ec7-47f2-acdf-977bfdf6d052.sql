-- Corriger les politiques RLS pour éliminer l'avertissement du linter
-- Ajouter des politiques pour UPDATE et DELETE (même restrictives)

-- Politique pour permettre aux administrateurs de mettre à jour le statut des demandes
-- (pour l'instant restrictive, à ajuster quand l'authentification admin sera en place)
CREATE POLICY "Seuls les administrateurs peuvent mettre à jour les demandes" 
ON public.demandes_devis 
FOR UPDATE 
TO authenticated
USING (false)  -- Temporairement restrictif jusqu'à l'implémentation des rôles admin
WITH CHECK (false);

-- Politique pour empêcher la suppression des demandes (audit trail)
CREATE POLICY "Aucune suppression autorisée des demandes de devis" 
ON public.demandes_devis 
FOR DELETE 
TO authenticated, anon
USING (false);  -- Aucune suppression autorisée pour conserver l'historique