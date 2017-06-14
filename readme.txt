Todo's:

1. What do we need from Ryoaki Taxi Management?
    a. Post Rate Computation
    b. Confirmation of Cancellation Fee
    c. Confirmation of Tip feature
    d. Confirmation of black listed customer
2. Confirmation of new estimate
3. Contract signing?
4. Confirmation of timeline.



Database Schema

driver
    driver_id
    first_name
    last_name
    address
    license_number
    age
    phone_number
    email
    password
    avatar_image_url
    created_by_user_id
    created_dttm
    modified_dttm
    modified_by_user_id

driver_transactions_log

    driver_id
    trip_id
    transaction_name
    transaction_desc
    transaction_status
    transaction_dttm
    created_by_user_id
    created_dttm
    modified_dttm
    modified_by_user_id

user
    user_id
    first_name
    last_name
    phone_number
    email
    password
    status
    phone_number_verified_flag
    created_by_user_id
    created_dttm
    modified_dttm
    modified_by_user_id

dispatcher

    dispatcher_id
    first_name
    last_name
    address
    email
    password
    phone_number
    created_by_user_id
    created_dttm
    modified_dttm
    modified_by_user_id

payment

    payment_id
    payment_transaction_code
    estimated_fare_amount_val
    actual_fare_amount_val
    tip_amount_val
    payment_transaction_dttm
    payment_method_id
    created_by_user_id
    created_dttm
    modified_dttm
    modified_by_user_id

payment_method

    payment_method_id
    user_id
    payment_method_type_id
    created_by_user_id
    created_dttm
    modified_dttm
    modified_by_user_id

payment_method_type

    payment_method_type_id
    name
    description
    created_by_user_id
    created_dttm
    modified_dttm
    modified_by_user_id



trip

    trip_id
    user_id
    driver_id
    vehicle_type_id
    dispatcher_id ( this is nullable )
    payment_id
    pick_up_address
    destination_address
    trip_start_dttm
    trip_completed_dttm
    trip_status
    booking_origination ( this will determine if the trip was generated from the app or in admin panel)
    estimated_fare_amount_val
    actual_fare_amount_val
    created_by_user_id
    created_dttm
    modified_dttm
    modified_by_user_id

favorite_place

    favorite_place_id
    user_id
    address
    coordinates
    label
    created_by_user_id
    created_dttm
    modified_dttm
    modified_by_user_id

vehicle_type

    vehicle_type_id
    vehicle_type_name
    vehicle_type_desc
    base_fare_amount_val
    fare_per_minute_amount_val
    fare_per_distance_amount_val
    minimum_fare_amount_val
    created_by_user_id
    created_dttm
    modified_dttm
    modified_by_user_id
