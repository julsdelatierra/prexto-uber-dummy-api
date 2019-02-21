'use strict';

const Hapi=require('hapi');

// Create a server with a host and port
const server=Hapi.server({
  host:'localhost',
  port:8000
});

// Add the route
server.route({
  method:'GET',
  path:'/partners/me',
  handler: (request, h) => {
    return {
      'driver_id': '8LvWuRAq2511gmr8EMkovekFNa2848lyMaQevIto-aXmnK9oKNRtfTxYLgPq9OSt8EzAu5pDB7XiaQIrcp-zXgOA5EyK4h00U6D1o7aZpXIQah--U77Eh7LEBiksj2rahB==',
      'first_name': 'Joaquín',
      'last_name': 'Moreno Pérez',
      'email': 'uber.developer+tester@example.com',
      'phone_number': '+14155550000',
      'picture': 'https://d1w2poirtb3as9.cloudfront.net/16ce502f4767f17b120e.png',
      'promo_code': 'ubert4544ue',
      'rating': 5,
      'activation_status': 'active'
    };
  }
});

server.route({
  method:'GET',
  path:'/partners/payments',
  handler: (request,h) => {
    return {
      "count": 1200,
      "limit": 1,
      "payments": [
      {
        "payment_id": "5cb8304c-f3f0-4a46-b6e3-b55e020750d7",
        "category": "fare",
        "event_time": 1502842757,
        "trip_id": "5cb8304c-f3f0-4a46-b6e3-b55e020750d7",
        "cash_collected": 0,
        "amount": 4.12,
        "driver_id": "8LvWuRAq2511gmr8EMkovekFNa2848lyMaQevIto-aXmnK9oKNRtfTxYLgPq9OSt8EzAu5pDB7XiaQIrcp-zXgOA5EyK4h00U6D1o7aZpXIQah--U77Eh7LEBiksj2rahB==",
        "breakdown": {
          "other": 4.16,
          "toll": 1,
          "service_fee": -1.04
        },
        "rider_fees": {
          "split_fare": 0.50
        },
        "partner_id": "8LvWuRAq2511gmr8EMkovekFNa2848lyMaQevIto-aXmnK9oKNRtfTxYLgPq9OSt8EzAu5pDB7XiaQIrcp-zXgOA5EyK4h00U6D1o7aZpXIQah--U77Eh7LEBiksj2rahB==",
        "currency_code": "USD"
      }
      ],
      "offset": 0
    }
  }
});

server.route({
  method:'GET',
  path:'/partners/trips',
  handler: (request,h) => {
    const size = 50
    const trip = {
        "fare": 6.2,
        "dropoff": {
          "timestamp": 1502844378
        },
        "vehicle_id": "0082b54a-6a5e-4f6b-b999-b0649f286381",
        "distance": 0.37,
        "start_city": {
          "latitude": 38.3498,
          "display_name": "Charleston, WV",
          "longitude": -81.6326
        },
        "status_changes": [
        {
          "status": "accepted",
          "timestamp": 1502843899
        },
        {
          "status": "driver_arrived",
          "timestamp": 1502843900
        },
        {
          "status": "trip_began",
          "timestamp": 1502843903
        },
        {
          "status": "completed",
          "timestamp": 1502844378
        }
        ],
        "surge_multiplier": 1,
        "pickup": {
          "timestamp": 1502843903
        },
        "driver_id": "8LvWuRAq2511gmr8EMkovekFNa2848lyMaQevIto-aXmnK9oKNRtfTxYLgPq9OSt8EzAu5pDB7XiaQIrcp-zXgOA5EyK4h00U6D1o7aZpXIQah--U77Eh7LEBiksj2rahB==",
        "status": "completed",
        "duration": 475,
        "trip_id": "b5613b6a-fe74-4704-a637-50f8d51a8bb1",
        "currency_code": "USD"
    }

    if (request.query.offset === (1000 - 50)) {
      
    }
    
    return {
      "count": 50000,
      "limit": 50,
      "trips": trips.slice(0, size),
      "offset": offset
    }
  }
});

// Start the server
const start =  async function() {

  try {
    await server.start();
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
};

start();