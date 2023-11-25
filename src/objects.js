user =  {
    "id": "String",
    "name": "String",
    "surname": "String",
    "profilePhoto": "URL",
    "email": "String",
    "password": "String",
    "favorites": [property],
    "reservations": [reservation],
    "notifications": [notification]
}
  

host = {
    "fk": user,                 // host is extension of a user
    "rating": "Number",
    "languages" : ["String"]
}

comment = {
    "author": "String",
    "date": "String",
    "content": "String",
    "rating": "Number"
}

property = {
    "id": "String",
    "title": "String",
    "host": host,               // relation 
    "rating": "Number",
    "propertyType": "String",
    "price": {
    "amount": "Number",
    "currency": "String",
    "perPeriod": "String"       // Day / Month
    },
    "images": ["URL"],
    "maxGuests": "Number",
    "roomsInfo": {
    "bedrooms": "Number",
    "singleBeds": "Number",
    "doubleBeds": "Number",
    "bathrooms": "Number",
    "extraRooms": "Number"
    },
    "description": "String",
    "permits": ["String"],
    "conditions": ["String"],
    "checkInTime": "String",
    "checkOutTime": "String",
    "location": {},             // Needs to be suitable for using in Google Maps API, and for suggesting nearby properties to user 
    "comments": [comment]
}

reservation = {
    "reservationId": "String",
    "propertyId": "String",
    "checkInDate": "String",
    "checkOutDate": "String",
    "status": "String"
}

notification = {
    "notificationId": "String",
    "type": "String",
    "message": "String",
    "date": "String"
}