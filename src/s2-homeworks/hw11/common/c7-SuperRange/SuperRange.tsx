import {Slider, SliderProps} from '@mui/material'
import React from 'react'

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
      <Slider
          sx={{ // стили для слайдера // пишет студен
            width: 147,
            '& .MuiSlider-track': {
              color: ' #0c2'
            },
            '& .MuiSlider-rail': {
              color: '#8b8b8b'
            },
            '& .MuiSlider-thumb': {
              borderRadius: '100%',
              backgroundColor: '#fff',
              border: '1px solid #0c2',

              '&::before': {
                content: '""',
                position: 'absolute',
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: '#01cb22',
                boxShadow: '0 0 2px 0 rgba(29, 33, 38, 0.1), 0 0 40px 0 rgba(29, 33, 38, 0.13)',
              },
            }

          }}
          {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
      />
  )
}

export default SuperRange
