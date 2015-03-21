-- MySQL Script generated by MySQL Workbench
-- 03/21/15 15:37:41
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema placestogo
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema placestogo
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `placestogo` ;
USE `placestogo` ;

-- -----------------------------------------------------
-- Table `placestogo`.`Korisnici`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `placestogo`.`Korisnici` (
  `idKorisnik` VARCHAR(128) NOT NULL,
  `korisnickoIme` VARCHAR(45) NOT NULL,
  `sifra` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `tip` VARCHAR(45) NOT NULL,
  `aktivan` TINYINT(1) NOT NULL,
  `banovan` TINYINT(1) NOT NULL,
  PRIMARY KEY (`idKorisnik`),
  UNIQUE INDEX `idKorisnik_UNIQUE` (`idKorisnik` ASC),
  UNIQUE INDEX `korisnickoIme_UNIQUE` (`korisnickoIme` ASC),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `placestogo`.`Objekti`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `placestogo`.`Objekti` (
  `idObjekat` INT NOT NULL AUTO_INCREMENT,
  `naziv` VARCHAR(45) NOT NULL,
  `adresa` VARCHAR(45) NOT NULL,
  `grad` VARCHAR(45) NOT NULL,
  `tip` VARCHAR(45) NOT NULL,
  `opis` TEXT(100) NULL,
  PRIMARY KEY (`idObjekat`),
  UNIQUE INDEX `idObjekat_UNIQUE` (`idObjekat` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `placestogo`.`Recenzije`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `placestogo`.`Recenzije` (
  `idRecenzija` INT NOT NULL AUTO_INCREMENT,
  `datumObjave` DATETIME NOT NULL,
  `Opis` TEXT(10000) NOT NULL,
  `Objekat_idObjekat` INT NOT NULL,
  `Korisnici_idKorisnik` VARCHAR(128) NOT NULL,
  PRIMARY KEY (`idRecenzija`),
  UNIQUE INDEX `idRecenzija_UNIQUE` (`idRecenzija` ASC),
  INDEX `fk_Recenzija_Objekat1_idx` (`Objekat_idObjekat` ASC),
  INDEX `fk_Recenzije_Korisnici1_idx` (`Korisnici_idKorisnik` ASC),
  CONSTRAINT `fk_Recenzija_Objekat1`
    FOREIGN KEY (`Objekat_idObjekat`)
    REFERENCES `placestogo`.`Objekti` (`idObjekat`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Recenzije_Korisnici1`
    FOREIGN KEY (`Korisnici_idKorisnik`)
    REFERENCES `placestogo`.`Korisnici` (`idKorisnik`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `placestogo`.`Komentari`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `placestogo`.`Komentari` (
  `idKomentar` INT NOT NULL AUTO_INCREMENT,
  `tekst` TEXT(500) NOT NULL,
  `vrijemeObjave` DATETIME NOT NULL,
  `Recenzija_idRecenzija` INT NOT NULL,
  `Korisnici_idKorisnik` VARCHAR(128) NOT NULL,
  PRIMARY KEY (`idKomentar`),
  UNIQUE INDEX `idKomentar_UNIQUE` (`idKomentar` ASC),
  INDEX `fk_Komentar_Recenzija1_idx` (`Recenzija_idRecenzija` ASC),
  INDEX `fk_Komentari_Korisnici1_idx` (`Korisnici_idKorisnik` ASC),
  CONSTRAINT `fk_Komentar_Recenzija1`
    FOREIGN KEY (`Recenzija_idRecenzija`)
    REFERENCES `placestogo`.`Recenzije` (`idRecenzija`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Komentari_Korisnici1`
    FOREIGN KEY (`Korisnici_idKorisnik`)
    REFERENCES `placestogo`.`Korisnici` (`idKorisnik`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `placestogo`.`Ocjene`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `placestogo`.`Ocjene` (
  `idOcjena` INT NOT NULL AUTO_INCREMENT,
  `vrijednost` INT NOT NULL,
  `Objekat_idObjekat` INT NOT NULL,
  `Korisnici_idKorisnik` VARCHAR(128) NOT NULL,
  PRIMARY KEY (`idOcjena`),
  UNIQUE INDEX `idOcjena_UNIQUE` (`idOcjena` ASC),
  INDEX `fk_Ocjena_Objekat1_idx` (`Objekat_idObjekat` ASC),
  INDEX `fk_Ocjene_Korisnici1_idx` (`Korisnici_idKorisnik` ASC),
  CONSTRAINT `fk_Ocjena_Objekat1`
    FOREIGN KEY (`Objekat_idObjekat`)
    REFERENCES `placestogo`.`Objekti` (`idObjekat`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Ocjene_Korisnici1`
    FOREIGN KEY (`Korisnici_idKorisnik`)
    REFERENCES `placestogo`.`Korisnici` (`idKorisnik`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `placestogo`.`Kategorije`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `placestogo`.`Kategorije` (
  `idKategorija` INT NOT NULL AUTO_INCREMENT,
  `naziv` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idKategorija`),
  UNIQUE INDEX `idKategorija_UNIQUE` (`idKategorija` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `placestogo`.`Objekat_has_Kategorija`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `placestogo`.`Objekat_has_Kategorija` (
  `Objekat_idObjekat` INT NOT NULL,
  `Kategorija_idKategorija` INT NOT NULL,
  PRIMARY KEY (`Objekat_idObjekat`, `Kategorija_idKategorija`),
  INDEX `fk_Objekat_has_Kategorija_Kategorija1_idx` (`Kategorija_idKategorija` ASC),
  INDEX `fk_Objekat_has_Kategorija_Objekat1_idx` (`Objekat_idObjekat` ASC),
  CONSTRAINT `fk_Objekat_has_Kategorija_Objekat1`
    FOREIGN KEY (`Objekat_idObjekat`)
    REFERENCES `placestogo`.`Objekti` (`idObjekat`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Objekat_has_Kategorija_Kategorija1`
    FOREIGN KEY (`Kategorija_idKategorija`)
    REFERENCES `placestogo`.`Kategorije` (`idKategorija`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `placestogo`.`Log`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `placestogo`.`Log` (
  `idLog` INT NOT NULL AUTO_INCREMENT,
  `vrijemeLogiranja` DATETIME NOT NULL,
  `ipAdresa` VARCHAR(15) NOT NULL,
  `Korisnici_idKorisnik` VARCHAR(128) NOT NULL,
  PRIMARY KEY (`idLog`),
  UNIQUE INDEX `idLog_UNIQUE` (`idLog` ASC),
  INDEX `fk_Log_Korisnici1_idx` (`Korisnici_idKorisnik` ASC),
  CONSTRAINT `fk_Log_Korisnici1`
    FOREIGN KEY (`Korisnici_idKorisnik`)
    REFERENCES `placestogo`.`Korisnici` (`idKorisnik`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `placestogo`.`PrivatnePoruke`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `placestogo`.`PrivatnePoruke` (
  `idPrivatnaPoruka` INT NOT NULL,
  `vrijemeSlanja` DATETIME NOT NULL,
  `naslov` VARCHAR(45) NOT NULL,
  `poruka` TEXT NOT NULL,
  `Korisnici_idKorisnik` VARCHAR(128) NOT NULL,
  `Korisnici_idKorisnik1` VARCHAR(128) NOT NULL,
  PRIMARY KEY (`idPrivatnaPoruka`),
  UNIQUE INDEX `idPrivatnaPoruka_UNIQUE` (`idPrivatnaPoruka` ASC),
  INDEX `fk_PrivatnePoruke_Korisnici1_idx` (`Korisnici_idKorisnik` ASC),
  INDEX `fk_PrivatnePoruke_Korisnici2_idx` (`Korisnici_idKorisnik1` ASC),
  CONSTRAINT `fk_PrivatnePoruke_Korisnici1`
    FOREIGN KEY (`Korisnici_idKorisnik`)
    REFERENCES `placestogo`.`Korisnici` (`idKorisnik`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_PrivatnePoruke_Korisnici2`
    FOREIGN KEY (`Korisnici_idKorisnik1`)
    REFERENCES `placestogo`.`Korisnici` (`idKorisnik`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `placestogo`;

DELIMITER $$
USE `placestogo`$$
CREATE DEFINER = CURRENT_USER TRIGGER `placestogo`.`Korisnici_BEFORE_INSERT` BEFORE INSERT ON `Korisnici` FOR EACH ROW
BEGIN
SET NEW.idKorisnik = UUID();

END
$$


DELIMITER ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
