

const BarStats = ({bottles}) => {
  return (
    <div>
        <ul>
                <li>Beer:{bottles.beer}</li>
                <li>Wine:{bottles.wine}</li>
                <li>Whiskey:{bottles.whiskey}</li>
                </ul> 
    </div>
  )
}

export default BarStats;