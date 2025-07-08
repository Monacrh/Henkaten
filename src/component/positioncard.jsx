import PropTypes from "prop-types";

export default function PositionCard({ title, count, titleColor }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold" style={{ color: titleColor }}>
          {title}
        </h3>
        <span className="text-2xl font-bold text-gray-700">{count}</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
        <div className="text-sm text-gray-600">Position</div>
      </div>
    </div>
  );
}

PositionCard.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number.isRequired,
  titleColor: PropTypes.string,
};
