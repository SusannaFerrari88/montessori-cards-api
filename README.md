# Montessori card API

Node.js BE service for the Montessori card webapp.

## Getting started

To run the service locally:

```bash
npm run dev
```

The server is now running on [http://localhost:5000](http://localhost:5000)

## Main APIs

### Get all Montessori cards

GET [/api/cards/](/api/cards/)

### Add new card

PUT [/api/cards/](/api/cards/)

Body request example:

```bash
{
    name: 'Apple',
    imageUrl: 'https://imageUrl',
    translations: {
        'it-IT': 'Mela',
        'de-DE': 'Apfel'
    }
}
```

### Remove a card

DELETE [/api/cards/<id>](/api/cards/<id>)

### Get an imageUrl from a name query (using the Pexels API)

GET [/api/images?name=Apple](/api/images?name=Apple)
