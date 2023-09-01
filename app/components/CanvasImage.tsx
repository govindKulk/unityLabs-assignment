import React, { useRef, useEffect } from 'react';

interface CanvasImageProps {
  imgUrl: string;
  text?: string;
  textColor?: string;
  textBg?: string;
  textData?: Record<string, string>;
}

const CanvasImage: React.FC<CanvasImageProps> = ({
  imgUrl,
  text,
  textColor,
  textBg,
  textData
}) => {

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  useEffect(() => {
    if (canvasRef) {
      const canvas: HTMLCanvasElement | null = canvasRef.current;
      const ctx = canvas?.getContext('2d');

      if (imgUrl && canvas && ctx) {
        const img = new Image();
        img.onload = () => {
          const canvasWidth = canvas.width;
          const canvasHeight = canvas.height;
          const imageWidth = img.width;
          const imageHeight = img.height;

          // Calculate scaling factors to fit the image within the canvas
          const widthScale = canvasWidth / imageWidth;
          const heightScale = canvasHeight / imageHeight;
          const scale = Math.min(widthScale, heightScale)*2;

          // Calculate the dimensions for the scaled image
          const newWidth = imageWidth * scale;
          const newHeight = imageHeight * scale;

          // Clear the canvas
          ctx.clearRect(0, 0, canvasWidth, canvasHeight);

          // Center the image on the canvas
          const x = (canvasWidth - newWidth) / 2;
          const y = (canvasHeight - newHeight) / 2;

          // Draw the scaled image
          ctx.drawImage(img, x, y, newWidth, newHeight);

          if (textData) {
            const { text, textColor, bgColor } = textData;
            const textWidth = ctx.measureText(text).width;

            ctx.fillStyle = bgColor || 'white';
            ctx.fillRect(0, 0, textWidth + 40, 48); // Adjust height as needed
            ctx.font = '24px Arial'; // Adjust font size as needed
            ctx.fillStyle = textColor || 'black';
            ctx.fillText(text, 20, 30); // Adjust position as needed
          }
        };
        img.src = imgUrl;
      }
    }
  }, [imgUrl, textData]);

  return (
    <div>
      <canvas 
        ref={canvasRef}
      />
    </div>
  )
}

export default CanvasImage;
