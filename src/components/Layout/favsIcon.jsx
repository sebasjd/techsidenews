import {AiOutlineStar} from 'react-icons/ai'
import { FavsIcon } from '../../styles/favsIcon'
import { ColorsCtx } from '../../styles/Colors'
import { useContext } from 'react'
import { Context } from '../../utils/Context'




const FavIcon = () => {

  const { PrimaryDark, PrimaryLight } = useContext(ColorsCtx)

  const {favState, setFavState} = useContext(Context)

  return (
    <>
      <FavsIcon onClick={() => setFavState(!favState)} mbgc={PrimaryDark} fds={PrimaryLight}> 
        <AiOutlineStar />
      </FavsIcon>
    </>
  )
}

export default FavIcon