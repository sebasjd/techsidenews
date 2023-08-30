import {AiOutlineStar} from 'react-icons/ai'
import { FavsIcon } from '../../styles/favsIcon'
import { ColorsCtx } from '../../styles/Colors'
import { useContext } from 'react'




const FavIcon = () => {

  const { PrimaryDark, PrimaryLight } = useContext(ColorsCtx)
  return (
    <>
      <FavsIcon mbgc={PrimaryDark} fds={PrimaryLight}> 
        <AiOutlineStar />
      </FavsIcon>
    </>
  )
}

export default FavIcon