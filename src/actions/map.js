// Map actions

export const setCenter = (coord) => ({
    type: 'SETCENTER',
    payload: { center: coord }
})

export const setZoom = (zoom) => ({
    type: 'SETZOOM',
    payload: { zoom: zoom }
})
