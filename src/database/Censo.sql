CREATE DATABASE PROYECTO;
USE PROYECTO;

CREATE TABLE CENSO(
id bigint primary key auto_increment not null,
name varchar(100) not null,
poblacion_total bigint not null,
quantity_men bigint not null,
quantity_women bigint not null,
promedio_edad integer not null,
temperatura_media integer,
promedio_ingreso bigint not null,
id_municip bigint not null,
id_departamento bigint not null,
state boolean default 1
);

CREATE TABLE MUNICIPIO(
id bigint primary key auto_increment not null,
name varchar(100) not null,
state boolean not null default 1
);

CREATE TABLE DEPARTAMENTO(
id bigint primary key auto_increment not null,
name varchar(100) not null,
state boolean not null default 1
);

ALTER TABLE CENSO
add constraint fk_CENSO_MUNICIPIO
foreign key(id_municip) references MUNICIPIO(id);

ALTER TABLE CENSO
add constraint fk_CENSO_DEPARTAMENTO
foreign key(id_departamento) references DEPARTAMENTO(id);

insert into DEPARTAMENTO(name) values("Amazonas");
insert into DEPARTAMENTO(name) values("Cundinamarca");
insert into DEPARTAMENTO(name) values("Tolima");
insert into DEPARTAMENTO(name) values("Antioquia");
insert into DEPARTAMENTO(name) values("Guainía");
insert into DEPARTAMENTO(name) values("Valle Del Cauca");
insert into DEPARTAMENTO(name) values("Arauca");
insert into DEPARTAMENTO(name) values("Guajira");
insert into DEPARTAMENTO(name) values("Vaupés");
insert into DEPARTAMENTO(name) values("Atlántico");
insert into DEPARTAMENTO(name) values("Guaviare");
insert into DEPARTAMENTO(name) values("Vichada");
insert into DEPARTAMENTO(name) values("Bolivar");
insert into DEPARTAMENTO(name) values("Huila");
insert into DEPARTAMENTO(name) values("Boyacá");
insert into DEPARTAMENTO(name) values("Magdalena");
insert into DEPARTAMENTO(name) values("Caldas");
insert into DEPARTAMENTO(name) values("Meta");
insert into DEPARTAMENTO(name) values("Caquetá");
insert into DEPARTAMENTO(name) values("Nariño");
insert into DEPARTAMENTO(name) values("Casanare");
insert into DEPARTAMENTO(name) values("Norte de Santander");
insert into DEPARTAMENTO(name) values("Cauca");
insert into DEPARTAMENTO(name) values("Putumayo");
insert into DEPARTAMENTO(name) values("Cesar");
insert into DEPARTAMENTO(name) values("Risaralda");
insert into DEPARTAMENTO(name) values("Chocó");
insert into DEPARTAMENTO(name) values("San Andrés y Providencia");
insert into DEPARTAMENTO(name) values("Córdoba");
insert into DEPARTAMENTO(name) values("Sucre");
insert into DEPARTAMENTO(name) values("Quindío");
insert into DEPARTAMENTO(name) values("Santander");

-- Insertar municipios
INSERT INTO MUNICIPIO (name)
VALUES
("Municipio A"), ("Municipio B"), ("Municipio C"), ("Municipio D"), ("Municipio E"),
("Municipio F"), ("Municipio G"), ("Municipio H"), ("Municipio I"), ("Municipio J"),
("Municipio K"), ("Municipio L"), ("Municipio M"), ("Municipio N"), ("Municipio O"),
("Municipio P"), ("Municipio Q"), ("Municipio R"), ("Municipio S"), ("Municipio T"),
("Municipio U"), ("Municipio V"), ("Municipio W"), ("Municipio X"), ("Municipio Y"),
("Municipio Z"), ("Municipio AA"), ("Municipio BB"), ("Municipio CC"), ("Municipio DD"),
("Municipio EE"), ("Municipio FF"), ("Municipio GG"), ("Municipio HH"), ("Municipio II"),
("Municipio JJ"), ("Municipio KK"), ("Municipio LL"), ("Municipio MM"), ("Municipio NN"),
("Municipio OO"), ("Municipio PP"), ("Municipio QQ"), ("Municipio RR"), ("Municipio SS"),
("Municipio TT"), ("Municipio UU"), ("Municipio VV"), ("Municipio WW"), ("Municipio XX"),
("Municipio YY"), ("Municipio ZZ");

-- Insertar registros de censo
INSERT INTO CENSO (name, poblacion_total, quantity_men, quantity_women, promedio_edad, temperatura_media, promedio_ingreso, id_municip, id_departamento)
VALUES
("Censo 1", 1000, 500, 500, 30, 25, 1500000, 1, 1),
("Censo 2", 2000, 950, 1050, 29, 28, 2000000, 2, 2),
("Censo 3", 3000, 1400, 1600, 27, 24, 2500000, 3, 3),
("Censo 4", 4000, 2000, 2000, 31, 26, 1800000, 4, 4),
("Censo 5", 5000, 2500, 2500, 33, 27, 2200000, 5, 5),
("Censo 6", 6000, 2900, 3100, 35, 23, 1900000, 6, 6),
("Censo 7", 7000, 3400, 3600, 28, 22, 2100000, 7, 7),
("Censo 8", 8000, 3900, 4100, 26, 25, 2400000, 8, 8),
("Censo 9", 9000, 4500, 4500, 29, 24, 1700000, 9, 9),
("Censo 10", 10000, 4900, 5100, 32, 21, 2000000, 10, 10),
("Censo 11", 11000, 5400, 5600, 30, 27, 2200000, 11, 11),
("Censo 12", 12000, 5900, 6100, 31, 26, 2500000, 12, 12),
("Censo 13", 13000, 6500, 6500, 33, 28, 2600000, 13, 13),
("Censo 14", 14000, 7000, 7000, 28, 23, 1900000, 14, 14),
("Censo 15", 15000, 7500, 7500, 27, 24, 2000000, 15, 15),
("Censo 16", 16000, 8000, 8000, 29, 22, 2300000, 16, 16),
("Censo 17", 17000, 8500, 8500, 30, 25, 2400000, 17, 17),
("Censo 18", 18000, 9000, 9000, 26, 28, 2500000, 18, 18),
("Censo 19", 19000, 9500, 9500, 31, 27, 1800000, 19, 19),
("Censo 20", 20000, 10000, 10000, 33, 21, 2000000, 20, 20),
("Censo 21", 21000, 10500, 10500, 32, 26, 2500000, 21, 21),
("Censo 22", 22000, 11000, 11000, 30, 25, 2600000, 22, 22),
("Censo 23", 23000, 11500, 11500, 31, 24, 2000000, 23, 23),
("Censo 24", 24000, 12000, 12000, 29, 23, 2100000, 24, 24),
("Censo 25", 25000, 12500, 12500, 27, 28, 2200000, 25, 25),
("Censo 26", 26000, 13000, 13000, 28, 26, 2300000, 26, 26),
("Censo 27", 27000, 13500, 13500, 30, 27, 2400000, 27, 27),
("Censo 28", 28000, 14000, 14000, 31, 22, 2500000, 28, 28),
("Censo 29", 29000, 14500, 14500, 33, 21, 1800000, 29, 29),
("Censo 30", 30000, 15000, 15000, 32, 23, 2000000, 30, 30);


select * from DEPARTAMENTO;
select * from CENSO;
select * from MUNICIPIO;

drop database PROYECTO;