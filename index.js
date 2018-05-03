let store = {
  drivers: [],
  passengers: [],
  trips: []
}
let driverId = 0
let passengerId = 0
let tripId = 0

class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }

  passengers() {
    let passengerIds = this.trips().map(trip => {
      return trip.passengerId
    })
    return store.passengers.filter(passenger => {
      return passengerIds.some(function(){return passenger.id})
    })
  }
}

class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++passengerId
    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }

  drivers() {
    let driverIds = this.trips().map(trip => {
      return trip.driverId
    })
    return store.drivers.filter(driver => {
      return driverIds.some(function(){return driver.id})
    })
  }
}

class Trip {
  constructor(driver, passenger) {
    this.driverId = driver.id
    this.passengerId = passenger.id
    this.id = ++tripId
    store.trips.push(this)
  }

  driver() {
    return store.drivers.filter(driver => {
      return driver.id === this.driverId
    })[0]
  }

  passenger() {
    return store.passengers.filter(passenger => {
      return passenger.id === this.passengerId
    })[0]
  }
}
