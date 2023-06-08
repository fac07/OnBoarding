USE [dbOnboardingCC]
GO

/****** Object:  StoredProcedure [dbo].[OBPPlantillaConocimientoPorPuesto]    Script Date: 8/06/2023 13:39:20 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		Cristian Castellanos
-- Create date: 08-06-2023
-- Description:	Lista los conocimientos a evaluar por puesto
-- =============================================
ALTER PROCEDURE [dbo].[OBPPlantillaConocimientoPorPuesto]
	@CodigoPuestoLaboral nvarchar(20)
AS
BEGIN
	select 
		PPAP.CodigoPuestoLaboral,
		PPAP.CodigoActividadPrioritaria,
		AP.Descripcion as DescripcionAP,
		AP.CodigoAspectoTecnico,
		AST.Nombre,
		AST.Descripcion as DescripcionAST
	from OBTPlantillaPuestoActividadPrioritaria PPAP 
	inner join OBTActividadPrioritaria AP
		on PPAP.CodigoActividadPrioritaria = AP.CodigoActividadPrioritaria
	inner join OBTAspectoTecnico AST
		on AP.CodigoAspectoTecnico = AST.CodigoAspectoTecnico
	where 
		PPAP.Activo = 1 
		and PPAP.Eliminado = 0
		and PPAP.CodigoPuestoLaboral = @CodigoPuestoLaboral
	order by
		AP.CodigoAspectoTecnico, AP.CodigoActividadPrioritaria
END
GO


