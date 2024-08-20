# Mages API

## Overview

The Mages API provides information about mages, spells, and magical books across different elemental types such as Fire, Earth, Water, and Air. The API allows users to retrieve detailed data on mages, spells, and books related to magic in a structured JSON format.

## Endpoints

### 1. **Get Characters**

**Endpoint:** `/characters`

**Method:** `GET`

**Description:** Retrieve a list of magicians, including their name, description, and elemental type.

**Response Example:**
```json
[
    {
        "name": "Pyronis",
        "description": "A mage who masters the power of fire, capable of conjuring devastating flames and controlling lava.",
        "type": "Fire"
    },
    {
        "name": "Aeris",
        "description": "An agile and wise mage who controls the air, able to create windstorms and tornadoes.",
        "type": "Air"
    }
    // Additional magicians...
]
```

### 2. **Get Spells**

**Endpoint:** `/spells`

**Method:** `GET`

**Description:** Retrieve a list of spells categorized by their elemental type (Fire, Earth, Water, Air).

**Response Example:**

```json
[
    {
        "name": "Fireball",
        "description": "A powerful sphere of fire that explodes on impact, causing massive area damage.",
        "type": "Fire"
    },
    {
        "name": "Earthquake",
        "description": "Causes a devastating tremor that damages and destabilizes structures and enemies in the area.",
        "type": "Earth"
    }
    // Additional spells...
]
```

### 2. **Get Books**

**Endpoint:** `/books`

**Method:** `GET`

**Description:** Retrieve a list of books related to magic, including their title, release date, and a brief description.

**Response Example:**

```json
[
    {
        "title": "The Arcane Grimoire",
        "releaseDate": "1998-05-14",
        "description": "An ancient tome that contains powerful secrets and spells, passed down through generations of the greatest wizards."
    },
    {
        "title": "Elemental Mastery: The Four Pillars of Magic",
        "releaseDate": "2005-11-02",
        "description": "A comprehensive guide on mastering the four main elements: Fire, Earth, Water, and Air."
    }
    // Additional books...
]
```
## Installation

To install and run the Magic API, follow these steps:

### 1. Clone the repository:
```
git clone https://github.com/ricmrs/mages-api.git
```

### 2. Navigate to the project directory:
```
cd mages-api
```

### 3. Start the server:
```
npm run start
```

The API will be available at http://localhost:3000.

## Usage

To interact with the API, you can use tools like curl, Postman, or simply your browser for GET requests. For example:

### 1. Retrieve all characters:
```
curl http://localhost:3000/characters
```

### 2. Retrieve all spells:
```
curl http://localhost:3000/spells
```

### 2. Retrieve all books:
```
curl http://localhost:3000/books
```

## License
This project is licensed under the MIT License - see the LICENSE file for details.
