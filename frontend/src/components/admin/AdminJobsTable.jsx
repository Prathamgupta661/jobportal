import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Delete, Edit2, Eye, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { JOB_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'

const AdminJobsTable = () => { 
    const {allAdminJobs, searchJobByText} = useSelector(store=>store.job);

    const [filterJobs, setFilterJobs] = useState(allAdminJobs);
    const navigate = useNavigate();

    useEffect(()=>{ 
        console.log('called');
        const filteredJobs = allAdminJobs.filter((job)=>{
            if(!searchJobByText){
                return true;
            };
            return job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) || job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase());

        });
        setFilterJobs(filteredJobs);
    },[allAdminJobs,searchJobByText])

    const handleDelete = async (jobId) => {
        try {
            if (!window.confirm("Are you sure you want to delete this job?")) {
                return;
            }
            
            const url=`${JOB_API_END_POINT}/delete/${jobId}`;
            const res=await axios.delete(url,{
                headers:{
                    "Content-Type": "application/json",
                },
                withCredentials: true,

            });
             if (res?.data?.success){
                toast.success(res.data.message);
                const updatedJobs = filterJobs.filter(job => job._id !== jobId);
                setFilterJobs(updatedJobs);

            }
        }
        catch (error) {
            console.error("Error deleting job:", error);
        }
    }
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent  posted jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        filterJobs?.map((job) => (
                            <tr>
                                <TableCell>{job?.company?.name}</TableCell>
                                <TableCell>{job?.title}</TableCell>
                                <TableCell>{job?.createdAt.split("T")[0]}</TableCell>
                                <TableCell className="text-right cursor-pointer">
                                    <Popover>
                                        <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                        <PopoverContent className="w-32">
                                            <div onClick={()=> navigate(`/admin/companies/${job._id}`)} className='flex items-center gap-2 w-fit cursor-pointer hover:bg-gray-100 p-2 rounded'>
                                                <Edit2 className='w-4' />
                                                <span>Edit</span>
                                            </div>
                                            <div onClick={()=> navigate(`/admin/jobs/${job._id}/applicants`)} className='flex items-center w-fit gap-2 cursor-pointer mt-2 hover:bg-gray-100 p-2 rounded'>
                                                <Eye className='w-4'/>
                                                <span>Applicants</span>
                                            </div>
                                            <div onClick={()=> handleDelete(job._id)} className='flex items-center w-fit gap-2 cursor-pointer mt-2 text-red-500 hover:bg-red-100 p-2 rounded'>
                                                <Delete className='w-4'/>
                                                <span>Delete</span>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </tr>

                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default AdminJobsTable