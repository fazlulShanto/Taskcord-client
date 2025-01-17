import React, { useState } from 'react'
import { Button } from 'src/components/ui/button';
import { Card, CardTitle, CardDescription, CardHeader, CardContent, CardFooter } from 'src/components/ui/card';
import { Edit3, CircleX, Link, Ellipsis, User, Circle, Settings, Lock, Pin, Trash2, ArrowLeftRight } from 'lucide-react';
import { Input } from 'src/components/ui/input';

const TaskModal = () => {
    const [isEditing, setIsEditing] = useState(false);

    const project = 'Project Name';

    const title = 'Task Title';
    const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem explicabo blanditiis, incidunt molestias ab, necessitatibus atque cupiditate magnam quam porro vel tempore sed consequuntur adipisci hic, fugit consectetur. Totam, assumenda.';
    const tags = ['Tag 1', 'Tag 2', 'Tag 3'];

    const assignedUsers = ['User 1', 'User 2', 'User 3'];
    const milestones = ['Milestone 1', 'Milestone 2', 'Milestone 3'];


    return (
        // Background
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>

            {/* Card */}
            <Card className='h-full w-full md:w-[min(90%,_1280px)] max-w-full p-2 fixed right-0 top-0 rounded-tr-none rounded-br-none overflow-y-auto'>

                <CardHeader>

                    {/* HEADER - Title and Buttons */}
                    <div className='flex justify-between'>
                        <CardTitle className='w-fit rounded-md text-lg'>

                            <p className='text-sm text-muted-foreground mb-1'>{project}</p>

                            {!isEditing ?
                                <div className='group relative'>
                                    <Button variant='ghost' className='p-2 text-2xl bg-green-600' onClick={() => setIsEditing(!isEditing)}>
                                        <span>{title}</span> <span className='text-lg'>|</span> <span className='text-sm'>Open</span>
                                    </Button>

                                    <Edit3 size={24} className='absolute right-[-16px] top-[-12px] rounded-full bg-primary transition-all duration-100 opacity-0 group-hover:opacity-100' />
                                </div>

                                :

                                <div className='relative'>
                                    <Input
                                        className='w-fit cursor-text rounded-md'
                                        value={title}
                                    />

                                    <CircleX size={24} className='absolute right-[-16px] top-[-12px] rounded-full hover:bg-primary' />
                                </div>

                            }

                        </CardTitle> {/* Click to edit, hover makes icon appear */}

                        {/* <Button variant='ghost' className=''></Button> */}
                        <div className='flex gap-4'>
                            <Link size={24} className='hover:bg-primary rounded-full cursor-pointer' />
                            <Ellipsis size={24} className='hover:bg-primary rounded-full cursor-pointer' />
                            <CircleX size={24} className='hover:bg-primary rounded-full cursor-pointer' />
                        </div>
                    </div>

                    {/* HEADER - Description */}
                    <div className='flex flex-col gap-4 pt-4'>
                        <CardDescription className=''>{description}</CardDescription>
                        <div className='flex gap-2 '>
                            {tags.map((tag) => (
                                <div className='w-fit bg-primary rounded-md py-1 px-3'>{tag}</div>
                            ))}

                            <Button variant='ghost' className='p-2 text-sm'>Add Tag</Button>
                        </div>
                    </div>

                </CardHeader>

                <hr className='border-b mx-6' />

                <CardContent className='grid grid-cols-[1fr_256px] gap-8 flex-1 h-full py-6'>

                    {/* Left Side */}
                    <div className='flex flex-col gap-12'>



                        {/* EVENT */}
                        <div className='flex gap-4'>
                            <User size={24} className='bg-primary rounded-full w-full h-full max-w-12 max-h-12' />
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm text-muted-foreground'>Username</p>

                                <div className='mb-2'>
                                    <div className='flex items-center gap-2'>
                                        <ArrowLeftRight className='bg-primary rounded-full p-1' />
                                        <p className='text-lg font-bold'> X <span className='text-muted-foreground'>was</span> (changed/added/updated/deleted) <span className='text-muted-foreground'>from</span> <span className='font-bold'>Task Title</span> to <span className='font-bold'>Task Title</span></p>
                                    </div>
                                    <p className='text-sm text-muted-foreground'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, recusandae placeat facilis dolore culpa omnis! Adipisci impedit porro vero accusantium.</p>
                                </div>

                                <div className=''>
                                    <div className='flex items-center gap-2'>
                                        <ArrowLeftRight className='bg-primary rounded-full p-1' />
                                        <p className='text-lg font-bold'> X <span className='text-muted-foreground'>was</span> (changed/added/updated/deleted) <span className='text-muted-foreground'>from</span> <span className='font-bold'>Task Title</span> to <span className='font-bold'>Task Title</span></p>
                                    </div>
                                    {/* <p className='text-sm text-muted-foreground'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, recusandae placeat facilis dolore culpa omnis! Adipisci impedit porro vero accusantium.</p> */}
                                </div>
                            </div>
                        </div>

                        {/* MILESTONE */}
                        <div className='flex flex-col gap-2 border p-4 rounded-md bg-primary'>
                            <p className='text-2xl font-bold'>MILESTONE COMPLETED</p>
                            <p>{description}</p>
                        </div>

                        {/* DISCUSSION */}
                        <div className='flex gap-4'>
                            <User size={24} className='bg-primary rounded-full w-full h-full max-w-12 max-h-12' />
                            <div>
                                <p className='text-sm text-muted-foreground'>Username</p>
                                <p className='text-lg font-bold'>Comment Summary Line <span className='text-sm text-muted-foreground'> (If applicable)</span></p>
                                <p>{description}</p>
                            </div>
                        </div>

                    </div>

                    {/* Right Side */}
                    <div className='flex flex-col gap-4'>

                        {/* Assigned Users */}
                        <Button variant='ghost' className='flex justify-between items-center gap-2'>
                            <p className='text-lg font-bold'>Assigned Users</p>
                            <Settings className='' />
                        </Button>
                        {assignedUsers.map((user) => (
                            <div className='w-full bg-primary rounded-md py-2 px-3 flex items-center gap-2'><User size={24} />{user}</div>
                        ))}

                        <hr className='border-b my-4' />

                        {/* Milestones */}
                        <Button variant='ghost' className='flex justify-between items-center gap-2'>
                            <p className='text-lg font-bold'>Milestones</p>
                            <Settings className='' />
                        </Button>
                        {milestones.map((milestone) => (
                            <div className='w-full bg-primary rounded-md py-2 px-3 flex items-center gap-2'><Circle size={24} />{milestone}</div>
                        ))}

                        <hr className='border-b my-4' />

                        {/* Notifications */}
                        <Button variant='outline' className='flex justify-between items-center gap-2'>
                            <p className='text-lg font-bold'>Notifications</p>
                            <Settings className='' />
                        </Button>

                        <hr className='border-b my-4' />

                        {/* Misc */}
                        <Button variant='ghost' className='flex justify-start gap-2 text-lg'>
                            <ArrowLeftRight /> Transfer Task
                        </Button>
                        <Button variant='ghost' className='flex justify-start gap-2 text-lg'>
                            <Lock /> Lock Conversation
                        </Button>
                        <Button variant='ghost' className='flex justify-start gap-2 text-lg'>
                            <Pin /> Pin Task
                        </Button>
                        <Button variant='destructive' className='flex justify-start gap-2 text-lg'>
                            <Trash2 /> Delete Task
                        </Button>

                    </div>

                </CardContent>

                {/* <CardFooter>
                    <p>Card Footer</p>
                </CardFooter> */}
            </Card>

        </div >
    )
}

export default TaskModal
