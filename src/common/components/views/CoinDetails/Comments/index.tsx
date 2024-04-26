import { TextareaAutosize } from '@mui/base/TextareaAutosize'
import { Button, Card, Input, Typography } from '@mui/material'
import React from 'react'

import { CommentItem } from '@/common/components/views/CoinDetails/Comments/CommentItem'

export const Comments: React.FunctionComponent = () => {
  return (
    <>
      <div className="relative">
        <Typography className="text-[#6F7287] text-lg font-bold mb-3">
          [Scroll to bottom] <i className="fa-solid fa-arrow-down ml-2"></i>
        </Typography>
        <div className="space-y-2">
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <Card className="border-[#393E51] rounded-none bg-[#1D202B] p-5">
            <Typography className="text-[#FFFFFF] text-lg font-bold">Add a comment</Typography>
            <TextareaAutosize
              className="mt-3 bg-[#0C0E16] p-3 w-full active:border-0 border-[#000] text-[#fff] placeholder:text-[#6F7287]"
              placeholder="Comment"
              minRows={4}
            />
            <Typography className="text-[#FFFFFF] text-lg font-bold mt-4">
              Upload an image <span className="text-[#9A9CAB]">(optional)</span>
            </Typography>
            <div>
              <Input className="bg-[#0C0E16] w-full border-[#000] text-[#9A9CAB] p-4 mt-3" type="file" />
            </div>
            <Button className="bg-[#18BA6C] border-0 text-white font-bold text-lg h-12 mt-5 min-w-[140px]">
              Post reply
            </Button>
          </Card>
        </div>
      </div>
    </>
  )
}
