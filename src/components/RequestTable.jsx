import { format } from "date-fns";
import { TbCancel } from "react-icons/tb";

const RequestTable = ({ request, onDelete }) => {
    const { postTitle, deadline, volunteersNeeded, category, status } = request || {};

    return (
        <tr>
            <td className='px-4 py-4 text-sm text-gray-500 whitespace-nowrap'>
                {postTitle}
            </td>

            <td className='px-4 py-4 text-sm text-gray-500 whitespace-nowrap'>
                {format(new Date(deadline), 'P')}
            </td>

            <td className='px-4 py-4 text-sm text-gray-500 whitespace-nowrap'>
                {volunteersNeeded}
            </td>

            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                <div className='flex items-center gap-x-2'>
                    <p className={`px-3 py-1 font-semibold text-xs rounded-full
                        ${category === 'Healthcare' && 'text-[#eca12c] bg-[#fdf5e9]'}
                        ${category === 'Education' && 'bg-blue-100 text-blue-600'}
                        ${category === 'Social Service' && 'bg-red-100 text-red-600'}
                        ${category === 'Animal Welfare' && 'bg-green-100 text-green-600'}
                        ${category === 'Environmental' && 'text-fuchsia-600 bg-fuchsia-100'}
                        ${category === 'Emergency Response' && 'text-pink-600 bg-pink-100'}
                    `}>
                        {category}
                    </p>
                </div>
            </td>

            <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                <div className='inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-yellow-100/60 text-yellow-500'>
                    <span className='h-1.5 w-1.5 rounded-full bg-yellow-500'></span>
                    <h2 className='text-sm font-normal'>{status}</h2>
                </div>
            </td>

            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                <button
                    onClick={() => onDelete(request._id)}
                    title='Cancel Request'
                    className='text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none'
                >
                    <TbCancel className="text-xl" />
                </button>
            </td>
        </tr>
    );
};

export default RequestTable;
