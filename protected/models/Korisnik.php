<?php

/**
 * This is the model class for table "korisnici".
 *
 * The followings are the available columns in table 'korisnici':
 * @property string $idKorisnik
 * @property string $korisnickoIme
 * @property string $sifra
 * @property string $email
 * @property string $tip
 * @property integer $aktivan
 * @property integer $banovan
 *
 * The followings are the available model relations:
 * @property Komentari[] $komentaris
 * @property Log[] $logs
 * @property Ocjene[] $ocjenes
 * @property Privatneporuke[] $privatneporukes
 * @property Privatneporuke[] $privatneporukes1
 * @property Recenzije[] $recenzijes
 */
class Korisnik extends CActiveRecord
{
	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'korisnici';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('idKorisnik, korisnickoIme, sifra, email, tip, aktivan, banovan', 'required'),
			array('aktivan, banovan', 'numerical', 'integerOnly'=>true),
			array('idKorisnik', 'length', 'max'=>128),
			array('korisnickoIme, sifra, email, tip', 'length', 'max'=>45),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('idKorisnik, korisnickoIme, sifra, email, tip, aktivan, banovan', 'safe', 'on'=>'search'),
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
			'komentaris' => array(self::HAS_MANY, 'Komentari', 'Korisnici_idKorisnik'),
			'logs' => array(self::HAS_MANY, 'Log', 'Korisnici_idKorisnik'),
			'ocjenes' => array(self::HAS_MANY, 'Ocjene', 'Korisnici_idKorisnik'),
			'privatneporukes' => array(self::HAS_MANY, 'Privatneporuke', 'Korisnici_idKorisnik'),
			'privatneporukes1' => array(self::HAS_MANY, 'Privatneporuke', 'Korisnici_idKorisnik1'),
			'recenzijes' => array(self::HAS_MANY, 'Recenzije', 'Korisnici_idKorisnik'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'idKorisnik' => 'Id Korisnik',
			'korisnickoIme' => 'Korisnicko Ime',
			'sifra' => 'Sifra',
			'email' => 'Email',
			'tip' => 'Tip',
			'aktivan' => 'Aktivan',
			'banovan' => 'Banovan',
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

		$criteria->compare('idKorisnik',$this->idKorisnik,true);
		$criteria->compare('korisnickoIme',$this->korisnickoIme,true);
		$criteria->compare('sifra',$this->sifra,true);
		$criteria->compare('email',$this->email,true);
		$criteria->compare('tip',$this->tip,true);
		$criteria->compare('aktivan',$this->aktivan);
		$criteria->compare('banovan',$this->banovan);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}

	/**
	 * Returns the static model of the specified AR class.
	 * Please note that you should have this exact method in all your CActiveRecord descendants!
	 * @param string $className active record class name.
	 * @return Korisnik the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}
}
