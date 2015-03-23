<?php

/**
 * This is the model class for table "log".
 *
 * The followings are the available columns in table 'log':
 * @property integer $idLog
 * @property string $vrijemeLogiranja
 * @property string $ipAdresa
 * @property string $Korisnici_idKorisnik
 *
 * The followings are the available model relations:
 * @property Korisnici $korisniciIdKorisnik
 */
class Log extends CActiveRecord
{
	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'log';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('vrijemeLogiranja, ipAdresa, Korisnici_idKorisnik', 'required'),
			array('ipAdresa', 'length', 'max'=>15),
			array('Korisnici_idKorisnik', 'length', 'max'=>128),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('idLog, vrijemeLogiranja, ipAdresa, Korisnici_idKorisnik', 'safe', 'on'=>'search'),
		);
	}

	/**
	 * @return array relational rules.
	 */
	public function relations()
	{
		// NOTE: you may need to adjust the relation name and the related
		// class name for the relations automatically generated below.
		return array(
			'korisniciIdKorisnik' => array(self::BELONGS_TO, 'Korisnici', 'Korisnici_idKorisnik'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'idLog' => 'Id Log',
			'vrijemeLogiranja' => 'Vrijeme Logiranja',
			'ipAdresa' => 'Ip Adresa',
			'Korisnici_idKorisnik' => 'Korisnici Id Korisnik',
		);
	}

	/**
	 * Retrieves a list of models based on the current search/filter conditions.
	 *
	 * Typical usecase:
	 * - Initialize the model fields with values from filter form.
	 * - Execute this method to get CActiveDataProvider instance which will filter
	 * models according to data in model fields.
	 * - Pass data provider to CGridView, CListView or any similar widget.
	 *
	 * @return CActiveDataProvider the data provider that can return the models
	 * based on the search/filter conditions.
	 */
	public function search()
	{
		// @todo Please modify the following code to remove attributes that should not be searched.

		$criteria=new CDbCriteria;

		$criteria->compare('idLog',$this->idLog);
		$criteria->compare('vrijemeLogiranja',$this->vrijemeLogiranja,true);
		$criteria->compare('ipAdresa',$this->ipAdresa,true);
		$criteria->compare('Korisnici_idKorisnik',$this->Korisnici_idKorisnik,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}

	/**
	 * Returns the static model of the specified AR class.
	 * Please note that you should have this exact method in all your CActiveRecord descendants!
	 * @param string $className active record class name.
	 * @return Log the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}
}
