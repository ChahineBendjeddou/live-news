'use client'
import { FC } from 'react'
import TimeAgo from 'react-timeago'
interface LiveTimestampProps {
  time: string
}

const LiveTimestamp: FC<LiveTimestampProps> = ({ time }) => {
  return <TimeAgo date={time} />
}

export default LiveTimestamp
