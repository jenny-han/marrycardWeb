import styled from 'styled-components'

const MapTransportBlock = styled.div`
  margin: 22px 0;
  font-family: 'JeonjuCraftGoR';
  line-height: 1.8;
`

const MapTransport = ({ children }) => {
  return <MapTransportBlock>{children}</MapTransportBlock>
}

export default MapTransport
