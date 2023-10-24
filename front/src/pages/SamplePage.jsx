import React from 'react'
import SampleTemplate from '../components/sample/SampleTemplate'
import SampleContainer from '../containers/sample/SampleContainer'
import GuestBookSampleContainer from '../containers/sample/GuestBookSampleContainer'
const SamplePage = () => {
  return (
    <SampleTemplate>
      <SampleContainer />
      <GuestBookSampleContainer />
    </SampleTemplate>
  )
}

export default SamplePage
