CREATE TABLE IF NOT EXISTS `ryoaki_app`.`dispatcher` (
  `dispatcher_id` INT(11) NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(50) NULL DEFAULT NULL,
  `last_name` VARCHAR(50) NULL DEFAULT NULL,
  `address` VARCHAR(255) NULL DEFAULT NULL,
  `phone_number` VARCHAR(20) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `created_by_user_id` INT(11) NOT NULL,
  `created_dttm` DATETIME NOT NULL,
  `modified_by_user_id` INT(11) NOT NULL,
  `modified_dttm` DATETIME NOT NULL,
  PRIMARY KEY (`dispatcher_id`),
  UNIQUE INDEX `dispatcher_id_UNIQUE` (`dispatcher_id` ASC),
  UNIQUE INDEX `phone_number_UNIQUE` (`phone_number` ASC),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB;
