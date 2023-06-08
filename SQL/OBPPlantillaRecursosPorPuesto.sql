USE [dbOnboardingCC]
GO

/****** Object:  StoredProcedure [dbo].[OBPPlantillaRecursosPorPuesto]    Script Date: 8/06/2023 13:39:26 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		Cristian Castellanos
-- Create date: 08-06-2023
-- Description:	Lista los recursos por puesto
-- =============================================
ALTER PROCEDURE [dbo].[OBPPlantillaRecursosPorPuesto]
	@CodigoPuestoLaboral nvarchar(20)
AS
BEGIN
	select 
		PPR.CodigoPuestoLaboral,
		PPR.CodigoRecurso,
		R.Descripcion,
		R.Responsable
	from OBTPlantillaPuestoRecurso PPR
	inner join OBTRecurso R
		on PPR.CodigoRecurso = R.CodigoRecurso
	where PPR.Activo = 1 and PPR.Eliminado = 0 and
	PPR.CodigoPuestoLaboral = @CodigoPuestoLaboral
END
GO


