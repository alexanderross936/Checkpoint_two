export const addListing = (newBusiness) => {
    return {
        type: 'ADD_LISTING',
        value: newBusiness
    }
}

export const removeListing = (index) => {
    return {
        type: 'REMOVE_LISTING',
        value: index
    }
}