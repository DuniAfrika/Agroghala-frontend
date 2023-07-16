import React from 'react'
import Heroimage from './Semi-components/hero-image'
import About from './Semi-components/about'
import Previewblogs from './Semi-components/previewblogs'
import Contacts from './Semi-components/contacts'

function Homepage() {
  return (
    <div>
      <Heroimage/>
      <About/>
      <Previewblogs/>  
      <Contacts/>
    </div>
  )
}

export default Homepage