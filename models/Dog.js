const dynamoose = require('dynamoose');

const dogSchema = new dynamoose.Schema({
  breed: {
    hashKey: true,
    type: String,
    required: true,
  },
  name: {
    rangeKey: true,
    type: String,
    required: true,
  },
}, {
  timestamps: true,
  throughput: 5,
  useNativeBooleans: true,
  useDocumentTypes: true,
});

module.exports = dynamoose.model(`${process.env.DB_PREFIX}Dog`, dogSchema);
