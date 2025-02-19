CREATE DATABASE bdprueba;

GO
USE bdprueba
GO
CREATE TABLE Usuarios (
    ID INT IDENTITY(1,1) PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    Carnet VARCHAR(20) UNIQUE,
    ApellidoPaterno VARCHAR(50),
    ApellidoMaterno VARCHAR(50), 
    Telefono VARCHAR(20), 
    Direccion VARCHAR(100),
    FechaNacimiento DATETIME, 
);
