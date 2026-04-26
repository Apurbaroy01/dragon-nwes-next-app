
const Leftbar = ({ item, activeid }) => {
    return (
        <div>
            <li className={`font-semibold text-sm text-center ${activeid === item.category_id ? 'bg-amber-500 text-white' : 'bg-gray-50'} p-2`}
                key={item.category_id}>
                {item.category_name}
            </li>
        </div>
    );
};

export default Leftbar;