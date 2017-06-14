CREATE TABLE IF NOT EXISTS `ryoaki_app`.`driver_transactions_log` (
  `driver_id` INT(11) NOT NULL AUTO_INCREMENT,
  `trip_id`  INT(11) NOT NULL,
  `transaction_name`  VARCHAR(255) NOT NULL,
  `transaction_desc` VARCHAR(255) NOT NULL,
  `transaction_status` VARCHAR(50) NOT NULL,
  `transaction_dttm` DATETIME NULL DEFAULT NULL,
  `created_by_user_id` INT(11) NOT NULL,
  `created_dttm` DATETIME NOT NULL,
  `modified_by_user_id` INT(11) NOT NULL,
  `modified_dttm` DATETIME NOT NULL,
  PRIMARY KEY (`driver_id`),
  INDEX `favorite_place_id` (`driver_id` ASC),
  INDEX `trip_id` (`trip_id` ASC)
)
ENGINE = InnoDB;
