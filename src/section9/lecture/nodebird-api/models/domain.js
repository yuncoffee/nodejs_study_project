const Sequelize = require('sequelize');

// 서드파티 서비스에서 노드버드 데이터를 가져갈때 제한두는
// 상대가 누군지 알아야햄
// 회원가입, 도메인
module.exports = class Domain extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      // 8장에서 KAKAO 웹 플랫폼에 등록했던 도메인 생각.
      host: {
        type: Sequelize.STRING(80),
        allowNull: false,
      },
      // ENUM() ==> 같은 문자열이지만 상세하게 범위를 지정.
      // STRING(10) ==> Type이 10글자 이내로 아무 문자열이나 가능
      // 무료 요금제 사용자인지. 프리미엄 요금제 사용자인지 구별할때.
      type: {
        type: Sequelize.ENUM('free', 'premium'),
        allowNull: false,
      },
      // ex) KAKAO KEY 처럼 KEY 발급
      clientSecret: {
        type: Sequelize.STRING(36),     // type: Sequelize.UUID ==> UUID인지 아닌지.  // mysql 은 UUIDV4가 안됨
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: true,
      paranoid: true,
      modelName: 'Domain',
      tableName: 'domains',
    });
  }

  static associate(db) {
    db.Domain.belongsTo(db.User);
  }
};