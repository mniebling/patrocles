import { expect } from 'chai'
import { maps } from '@/store/map-data'


describe('map-data.ts', () => {

  it('should have all unique ids', () => {
    const uniqueIds: number[] = []

    maps.forEach(map => {
      if (!uniqueIds.includes(map.id)) {
        uniqueIds.push(map.id)
      }
    })

    expect(maps.length).to.equal(uniqueIds.length)
  })
})
