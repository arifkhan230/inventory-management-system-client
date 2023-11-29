
import PropTypes from 'prop-types';

const Points = ({ points }) => {
    console.log(points);
    return (
        <div className="card card-compact shadow-xl">
            <figure><img className='w-full h-60' src={points.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-semibold">{points.title}</h2>
                <p className='text-sm'>{points.description}</p>
                
            </div>
        </div>
    );
};

Points.propTypes = {
    points: PropTypes.object
};

export default Points;