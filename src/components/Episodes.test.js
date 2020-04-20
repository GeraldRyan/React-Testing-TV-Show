import React from 'react'
import {render} from '@testing-library/react'
import Episodes from './Episodes'

test("Does the component Render?", ()=>{
  render(<Episodes episodes={[]}></Episodes>)
})