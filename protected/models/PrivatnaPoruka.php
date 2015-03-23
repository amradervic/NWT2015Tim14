<?php

/**
 * This is the model class for table "privatneporuke".
 *
 * The followings are the available columns in table 'privatneporuke':
 * @property integer $idPrivatnaPoruka
 * @property string $vrijemeSlanja
 * @property string $naslov
 * @property string $poruka
 * @property string $Korisnici_idKorisnik
 * @property string $Korisnici_idKorisnik1
 *
 * The followings are the available model relations:
 * @property Korisnici $korisniciIdKorisnik
 * @property Korisnici $korisniciIdKorisnik1
 */
class PrivatnaPoruka extends CActiveRecord
{
	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'privatneporuke';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('idPrivatnaPoruka, vrijemeSlanja, naslov, poruka, Korisnici_idKorisnik, Korisnici_idKorisnik1', 'required'),
			array('idPrivatnaPoruka', 'numerical', 'integerOnly'=>true),
			array('naslov', 'length', 'max'=>45),
			array('Korisnici_idKorisnik, Korisnici_idKorisnik1', 'length', 'max'=>128),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('idPrivatnaPoruka, vrijemeSlanja, naslov, poruka, Korisnici_idKorisnik, Korisnici_idKorisnik1', 'safe', 'on'=>'search'),
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
			'korisniciIdKorisnik1' => array(self::BELONGS_TO, 'Korisnici', 'Korisnici_idKorisnik1'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'idPrivatnaPoruka' => 'Id Privatna Poruka',
			'vrijemeSlanja' => 'Vrijeme Slanja',
			'naslov' => 'Naslov',
			'poruka' => 'Poruka',
			'Korisnici_idKorisnik' => 'Korisnici Id Korisnik',
			'Korisnici_idKorisnik1' => 'Korisnici Id Korisnik1',
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

		$criteria->compare('idPrivatnaPoruka',$this->idPrivatnaPoruka);
		$criteria->compare('vrijemeSlanja',$this->vrijemeSlanja,true);
		$criteria->compare('naslov',$this->naslov,true);
		$criteria->compare('poruka',$this->poruka,true);
		$criteria->compare('Korisnici_idKorisnik',$this->Korisnici_idKorisnik,true);
		$criteria->compare('Korisnici_idKorisnik1',$this->Korisnici_idKorisnik1,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}

	/**
	 * Returns the static model of the specified AR class.
	 * Please note that you should have this exact method in all your CActiveRecord descendants!
	 * @param string $className active record class name.
	 * @return PrivatnaPoruka the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}
}
