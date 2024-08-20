export const routeTypes = {
    characters: {
        searchBy: 'name',
        structure: {
            'name': 'string',
            'description': 'string',
            'type': 'string',
            'image': 'string',
        }
    },
    spells: {
        searchBy: 'name',
        structure: {
            'name': 'string',
            'description': 'string',
            'type': 'string',
        }
    },
    books: {
        searchBy: 'title',
        structure: {
            'title': 'string',
            'releaseDate': 'string',
            'description': 'string',
            'image': 'string',
        }
    }
}