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
      <div className="flex justify-between text-sm text-gray-400 mb-2">
        <span>₦{localValue[0].toLocaleString()}</span>
        <span>₦{localValue[1].toLocaleString()}</span>
      </div>
      
      <Slider.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        value={localValue}
        min={0}
        max={1000000}
        step={1000}
        onValueChange={(newValue) => {
          const value = newValue as [number, number];
          setLocalValue(value);
          onChange(value);
        }}
      >
        <Slider.Track className="bg-gray-700 relative grow rounded-full h-[3px]">
          <Slider.Range className="absolute bg-accent rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb
          className="block w-5 h-5 bg-white border-2 border-accent rounded-full hover:bg-accent hover:border-white focus:outline-none transition-colors"
          aria-label="Min price"
        />
        <Slider.Thumb
          className="block w-5 h-5 bg-white border-2 border-accent rounded-full hover:bg-accent hover:border-white focus:outline-none transition-colors"
          aria-label="Max price"
        />
      </Slider.Root>
    </div>
  );
} 