import numpy as np
import cv2
import os
from os import walk

# change file paths here
input_name = "trees_short"

# change the delay (in frames) here
delay = 1

def process(input_name, output_name, delay):
    video = cv2.VideoCapture(input_name)
    if not video.isOpened():
        print("Error opening video file.")
        return

    total_frames = int(video.get(cv2.CAP_PROP_FRAME_COUNT))
    final_video = cv2.VideoWriter(output_name, cv2.VideoWriter_fourcc(*'mp4v'), video.get(cv2.CAP_PROP_FPS),
                                  (int(video.get(cv2.CAP_PROP_FRAME_WIDTH)), int(video.get(cv2.CAP_PROP_FRAME_HEIGHT))))

    for i in range(total_frames - delay):
        # Read the initial frame
        video.set(cv2.CAP_PROP_POS_FRAMES, i)
        ret, frame1 = video.read()
        if not ret:
            break

        # Read the frame after the delay
        video.set(cv2.CAP_PROP_POS_FRAMES, i + delay)
        ret, frame2 = video.read()
        if not ret:
            break

        # Convert frames to grayscale
        frame1_gray = cv2.cvtColor(frame1, cv2.COLOR_BGR2GRAY)
        frame2_gray = cv2.cvtColor(frame2, cv2.COLOR_BGR2GRAY)

        # Calculate the absolute difference between frames
        frame_diff = cv2.absdiff(frame1_gray, frame2_gray)

        # Threshold the difference
        _, thresh = cv2.threshold(frame_diff, 30, 255, cv2.THRESH_BINARY)  # Adjust threshold value as needed

        # Convert single channel image back to 3 channels
        final_frame = cv2.cvtColor(thresh, cv2.COLOR_GRAY2BGR)

        final_video.write(final_frame)
        print(i + 1, "of", total_frames - delay)

    final_video.release()
    video.release()
    print("Done!")

process(input_name + ".mp4", input_name + "_output_BW.mp4", delay)
