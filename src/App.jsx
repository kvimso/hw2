import './App.css'
import Button from './components/Button/Button'
import ProductCard from './components/ProductCard/ProductCard'
import Text from './components/Text/Text'

function App() {

  return (
    <div>
      < Text feri='red'
        zoma='40px'
        adgilmdebareoba='center'
        ojaxi='cursive'
      />
          <ProductCard 
        fasi="$10" 
        odenoba="5" 
        saxeli="Sample Product" 
        agwera="This is a sample description." 
        gama="Red" 
      />
      < Button ButtonText={'press'}
        gamaferi={'red'}
        sigane={'100px'}
        sigrdze={'100px'}
        sad={'center'}
      
      />
    </div>

  )
}

export default App
