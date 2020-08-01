import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [ // TODO: implement function to map tags from props to the options array
  { key: 'af', value: 'af', text: 'Afghanistan' }, 
  { key: 'ax', value: 'ax', text: 'Aland Islands' }
]

const FilterBar = () => (
  <Dropdown
    clearable
    fluid
    multiple
    search
    selection
    options={options}
    placeholder='Filter by Tags'
  />
)

export default FilterBar
