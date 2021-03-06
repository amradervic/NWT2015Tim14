<?php

/**
 * This is the model class for table "ocjene".
 *
 * The followings are the available columns in table 'ocjene':
 * @property integer $idOcjena
 * @property integer $vrijednost
 * @property integer $Objekat_idObjekat
 * @property string $Korisnici_idKorisnik
 *
 * The followings are the available model relations:
 * @property Objekti $objekatIdObjekat
 * @property Korisnici $korisniciIdKorisnik
 */
class Ocjena extends CActiveRecord
{
	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'ocjene';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('vrijednost, Objekat_idObjekat, Korisnici_idKorisnik', 'required'),
			array('vrijednost, Objekat_idObjekat', 'numerical', 'integerOnly'=>true),
			array('Korisnici_idKorisnik', 'length', 'max'=>128),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('idOcjena, vrijednost, Objekat_idObjekat, Korisnici_idKorisnik', 'safe', 'on'=>'search'),
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
			'objekatIdObjekat' => array(self::BELONGS_TO, 'Objekti', 'Objekat_idObjekat'),
			'korisniciIdKorisnik' => array(self::BELONGS_TO, 'Korisnici', 'Korisnici_idKorisnik'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'idOcjena' => 'Id Ocjena',
			'vrijednost' => 'Vrijednost',
			'Objekat_idObjekat' => 'Objekat Id Objekat',
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

		$criteria->compare('idOcjena',$this->idOcjena);
		$criteria->compare('vrijednost',$this->vrijednost);
		$criteria->compare('Objekat_idObjekat',$this->Objekat_idObjekat);
		$criteria->compare('Korisnici_idKorisnik',$this->Korisnici_idKorisnik,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}

	/**
	 * Returns the static model of the specified AR class.
	 * Please note that you should have this exact method in all your CActiveRecord descendants!
	 * @param string $className active record class name.
	 * @return Ocjena the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}
}
