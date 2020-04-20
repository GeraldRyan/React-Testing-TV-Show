import React from 'react'
import {render} from '@testing-library/react'
import Episodes from './Episodes'

const episodeTestData = [
  1,
  2,
  3
]


test("Does the component Render?", ()=>{
  render(<Episodes episodes={[]}></Episodes>)
})

test("Check that episodes re-renders upon initialization", ()=>{
  
  const { rerender } = render(<Episodes episodes={[]}/>)
  
  rerender(<Episodes episodes={episodeTestData} />)

})