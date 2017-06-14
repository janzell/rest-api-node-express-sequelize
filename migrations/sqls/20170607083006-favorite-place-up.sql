CREATE TABLE IF NOT EXISTS `ryoaki_app`.`favorite_place` (
  `favorite_place_id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_id`  INT(11) NOT NULL,
  `address`  VARCHAR(255) NOT NULL,
  `coordinates` VARCHAR(255) NOT NULL,
  `label` VARCHAR(255) NULL DEFAULT NULL,
  `created_by_user_id` INT(11) NOT NULL,
  `created_dttm` DATETIME NOT NULL,
  `modified_by_user_id` INT(11) NOT NULL,
  `modified_dttm` DATETIME NOT NULL,
  PRIMARY KEY (`favorite_place_id`),
  UNIQUE INDEX `favorite_place_id_UNIQUE` (`favorite_place_id` ASC),
ENGINE = InnoDB;
