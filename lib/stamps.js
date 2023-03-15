
export async function getStampIdList() {
    return [{
      params: {
        id: '1'
      }
    }, {
      params: {
        id: '2'
      }
    }, {
      params: {
        id: '3'
      }
    }]
  }

export async function getStampDetails(stampId) {
    const dataSet = {
      '1': {
        title: 'CaminARte Condado',
        date: 'March 15, 2023',
        city: 'Condado, Puerto Rico',
        image: '/assets/images/hectorlavoe-alec.jpeg',
        contractAddr: '2WVH3rGdTiwE8HbMvJ5S7L8RWcaszjoNF5BEbmVf8GtU'
      },
      '2': {
        title: 'CaminARte San Patricio',
        date: 'April 02, 2023',
        city: 'Guaynabo, Puerto Rico',
        image: '/assets/images/sanpatricio-owtlw.jpg',
        contractAddr: '9RZ8HwFprthbnRb2rFii8ot3UqeRq6JhGcnm31QXD3AN'
      },
      '3': {
        title: 'CaminARte Santurce',
        date: 'June 09, 2023',
        city: 'Santurce, Puerto Rico',
        image: '/assets/images/bikismo.jpeg',
        contractAddr: 'AMDgbhjVeVu3uwQv9qCMSRo2vKP62pm93k2npVhwJu3C'
      }
    }
    return dataSet[stampId]
  }