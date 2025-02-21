'use client';

import { useState, useEffect } from 'react';
import * as Slider from '@radix-ui/react-slider';

interface PriceRangeSliderProps {
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

export default function PriceRangeSlider({ value, onChange }: PriceRangeSliderProps) {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  return (
    <div className="px-2">
      <Slider.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        value={localValue}
        max={1000000}
        step={1000}
        onValueChange={(newValue) => {
          setLocalValue(newValue as [number, number]);
          onChange(newValue as [number, number]);
        }}
      >
        <Slider.Track className="bg-gray-200 relative grow rounded-full h-[3px]">
          <Slider.Range className="absolute bg-accent rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb
          className="block w-5 h-5 bg-white border-2 border-accent rounded-full hover:bg-accent hover:border-white focus:outline-none"
          aria-label="Min price"
        />
        <Slider.Thumb
          className="block w-5 h-5 bg-white border-2 border-accent rounded-full hover:bg-accent hover:border-white focus:outline-none"
          aria-label="Max price"
        />
      </Slider.Root>
      
      <div className="flex justify-between mt-4 text-sm">
        <div>₦{localValue[0].toLocaleString()}</div>
        <div>₦{localValue[1].toLocaleString()}</div>
      </div>
    </div>
  );
} 