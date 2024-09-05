import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard'

export default function Workout(props) {
  const {workout} = props

  return (
    <SectionWrapper
        id={'workout'}
        header={"welcome to"} 
        title={['The', 'DANGER', 'ZONE']}>
          <div className='flex flex-col gap-4'>
            {workout.map((exercise, exerciseIndex) => {
              return (
                <ExerciseCard exercise={exercise} exerciseIndex={exerciseIndex} key={exerciseIndex}/>
              )
            })}
          </div>
    </SectionWrapper>
  )
}
