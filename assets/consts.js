export const routeTypes = {
    characters: {
        searchBy: 'fullName',
        structure: {
            'fullName': 'string',
            'nickname': 'string',
            'children': 'object',
            'image': 'string',
        }
    },
    spells: {
        searchBy: 'spell',
        structure: {
            'spell': 'string',
            'use': 'string'
        }
    }
}