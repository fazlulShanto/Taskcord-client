import React, { useState } from 'react'
import { Button } from 'src/components/ui/button';
import { Card, CardTitle, CardDescription, CardHeader, CardContent, CardFooter } from 'src/components/ui/card';
import { Edit3, CircleX, Link, Ellipsis } from 'lucide-react';
import { Input } from 'src/components/ui/input';

const IssueModal = () => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        // Background
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>

            {/* Card */}
            <Card className='h-full w-full md:w-[min(90%,_1280px)] max-w-full p-2 fixed right-0 top-0 rounded-tr-none rounded-br-none'>

                <CardHeader>

                    {/* HEADER - Title and Buttons */}
                    <div className='flex justify-between items-center'>
                        <CardTitle className='w-fit rounded-md text-lg'>

                            {!isEditing ?
                                <div className='group relative'>
                                    <Button variant='ghost' className='p-2 text-2xl bg-green-600' onClick={() => setIsEditing(!isEditing)}>
                                        <span>ISSUE NAME HERE</span> <span className='text-lg'>|</span> <span className='text-sm'>Open</span>
                                    </Button>

                                    <Edit3 size={24} className='absolute right-[-16px] top-[-12px] rounded-full bg-primary transition-all duration-100 opacity-0 group-hover:opacity-100' />
                                </div>

                                :

                                <div className='relative'>
                                    <Input
                                        className='w-fit cursor-text rounded-md'
                                        value='Card Title'
                                    />

                                    <CircleX size={24} className='absolute right-[-16px] top-[-12px] rounded-full hover:bg-primary' />
                                </div>

                            }

                        </CardTitle> {/* Click to edit, hover makes icon appear */}

                        {/* <Button variant='ghost' className=''></Button> */}
                        <div className='flex gap-4'>
                            <Link size={24} className='' />
                            <Ellipsis size={24} className='' />
                            <CircleX size={24} className='' />
                        </div>
                    </div>

                    {/* HEADER - Description */}
                    <div>
                        <CardDescription className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem explicabo blanditiis, incidunt molestias ab, necessitatibus atque cupiditate magnam quam porro vel tempore sed consequuntur adipisci hic, fugit consectetur. Totam, assumenda.</CardDescription>
                    </div>

                </CardHeader>

                <hr className='border-b' />

                <CardContent>

                    {/* Left Side */}
                    

                    {/* Right Side */}

                </CardContent>

                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>

        </div >
    )
}

export default IssueModal
